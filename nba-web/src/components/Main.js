import React from 'react';
import { Profile } from './Profile';
import {SearchBar } from './SearchBar';
import { DataViewContainer } from './DataViewContainer';
import nba from 'nba';
import * as snba from '../simulateNBA';
import { DEFAULT_PLAYER_INFO} from '../constants';

export class Main extends React.Component{
    state = {
        playerInfo: DEFAULT_PLAYER_INFO
    }

    componentDidMount() {
        this.loadPlayerInfo(this.state.playerInfo.fullName);
    }

    handleSelectPlayer = (playerName) => {
        this.loadPlayerInfo(playerName);
    }

    loadPlayerInfo = (playerName) => {
        /*The NBA.com does not allow browser to read the nba.stats any more
        * so this part of code is disactivated
        * simulateNBA offers data to simulate the data form NBA.com */
        /*
        nba.stats.playerInfo({ PlayerID: this.state.playerId })
            .then((info) => {
                const playerInfo = Object.assign({},
                    info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
                console.log("final player info", playerInfo);
                this.setState({ playerInfo });
            })
            .catch((e) => {
                console.log(e);
            });*/
        const playerInfo = snba.getPlayerInfo(playerName);
        console.log(playerInfo);
        this.setState({playerInfo});
    }

    render() {
        return (
            <div className="main">
                <SearchBar handleSelectPlayer={this.handleSelectPlayer}/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerInfo.playerId}/>
                </div>
            </div>

        );
    }
}