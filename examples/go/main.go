package main

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
	"path/filepath"

	pb_matrix "github.com/zhaytee/matrix-rpc-bot/proto/compiled/go"
	"google.golang.org/grpc"
)

type config struct {
	Homeserver           string
	DisplayName          string
	InitialPresence      string
	MatrixRpcBotEndpoint string
}

var configDefaults = config{
	Homeserver:           "https://matrix.org",
	DisplayName:          "Some Bot",
	InitialPresence:      pb_matrix.Presence_PRESENCE_ONLINE.String(),
	MatrixRpcBotEndpoint: "127.0.0.1:58558",
}

type authParams struct {
	AccessToken string
	DeviceId    string
	UserId      string
}

func main() {
	ctx := context.Background()

	var cfg *config
	var ap *authParams

	userHomeDir, err := os.UserHomeDir()
	if err != nil {
		log.Fatal(err)
	}
	mrbRootPath := filepath.Join(userHomeDir, ".local", "mrb-go-example")
	err = os.MkdirAll(mrbRootPath, 0700)
	if err != nil {
		log.Fatal(err)
	}

	needCfg := false
	mrbCfgPath := filepath.Join(mrbRootPath, "config.json")
	_, err = os.Stat(mrbCfgPath)
	if err != nil {
		if os.IsNotExist(err) {
			needCfg = true
		} else {
			log.Fatal(err)
		}
	}
	if needCfg {
		d := configDefaults
		cfg = &d
		cfgJson, err := json.MarshalIndent(&cfg, "", "  ")
		if err != nil {
			log.Fatal(err)
		}
		err = ioutil.WriteFile(mrbCfgPath, cfgJson, 0600)
		if err != nil {
			log.Fatal(err)
		}
		log.Printf("Default config saved: %s", mrbCfgPath)
		log.Printf("Tweak it and then re-run.")
		os.Exit(0)
	} else {
		cfgJsonBytes, err := ioutil.ReadFile(mrbCfgPath)
		if err != nil {
			log.Fatal(err)
		}
		err = json.Unmarshal(cfgJsonBytes, &cfg)
		if err != nil {
			log.Fatal(err)
		}
		log.Printf("Config loaded: %s", mrbCfgPath)
	}

	rpcConn, err := grpc.Dial(cfg.MatrixRpcBotEndpoint, grpc.WithInsecure())
	if err != nil {
		log.Fatal(err)
	}
	matrixClient := pb_matrix.NewMatrixClient(rpcConn)
	log.Printf("Connected to matrix-rpc-bot @ %s", cfg.MatrixRpcBotEndpoint)

	needAuth := false
	mrbAuthPath := filepath.Join(mrbRootPath, "auth_params.json")
	_, err = os.Stat(mrbAuthPath)
	if err != nil {
		if os.IsNotExist(err) {
			needAuth = true
		} else {
			log.Fatal(err)
		}
	}
	if needAuth {
		// TODO: ask for username/assword
		gatResp, err := matrixClient.GetAccessToken(ctx, &pb_matrix.GetAccessTokenRequest{
			Homeserver: cfg.Homeserver,
			Username:   "username",
			Password:   "password",
		})
		if err != nil {
			log.Fatal(err)
		}
		ap = &authParams{
			AccessToken: gatResp.AccessToken,
			DeviceId:    gatResp.DeviceId,
			UserId:      gatResp.UserId,
		}
		apJson, err := json.MarshalIndent(&ap, "", "  ")
		if err != nil {
			log.Fatal(err)
		}
		err = ioutil.WriteFile(mrbAuthPath, apJson, 0600)
		if err != nil {
			log.Fatal(err)
		}
		log.Printf("Auth params saved: %s", mrbAuthPath)
	} else {
		apJsonBytes, err := ioutil.ReadFile(mrbAuthPath)
		if err != nil {
			log.Fatal(err)
		}
		err = json.Unmarshal(apJsonBytes, &ap)
		if err != nil {
			log.Fatal(err)
		}
		log.Printf("Auth params loaded: %s", mrbAuthPath)
	}

	startSession(ctx, matrixClient, cfg, ap)

	log.Printf("Done. Bye!")
}
