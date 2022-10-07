import React from 'react';
import PropTypes from 'prop-types';
import Terrain from "./terrain";
import Coin from "./coin";
import Door from './door';
import Platform from './platform';
import Button from './button';
import {enemyHeight, enemyWidth, platformHeight, terrainHeight} from '../constants';

const Room = ({player, enemies, platforms, terrain, doors, coins, buttons, stageX}) => {
    let style = {
        transform: `translate(-${stageX}px, 0px)`,
    };

    return (<div
        className='stage'
        style={style}
    >
        {player}
        {enemies.map(
            (enemy,index) => (
                <span
                    className='enemy'
                    key={index}
                    style={{
                        transform: `translate(${enemy}px, 0px)`, // move stage
                        height: enemyHeight,
                        width: enemyWidth,
                    }}
                />
            ),
        )}
        {platforms.map(
            (platform, index) => (
                <Platform
                    xPos={platform["xPos"]}
                    yPos={platform["yPos"]}
                    length={platform["length"]}
                    height={platformHeight}
                    key={index}
                    name={`${index}`}
                />
            )
        )}
        {terrain.map(
            (platform, index) => (
                <Terrain
                    xPos={platform["xPos"]}
                    yPos={platform["yPos"]}
                    length={platform["length"]}
                    height={terrainHeight}
                    key={index}
                    name={`${index}`}
                />
            )
        )}
        
        {coins.map(
                coin => (
                    <Coin
                        height={coin["height"]}
                        width={coin["width"]}
                        xPos={coin["xPos"]}
                        yPos={coin["yPos"]}
                        key={coin["name"]}
                    />
                )
            )
        }
        {doors.map(
            (door) => (
                <Door 
                    height={door["height"]} 
                    width={door["width"]} 
                    xPos={door["xPos"]} 
                    yPos={door["yPos"]} 
                    key={door["name"]}
                />
            )
        )}
        {buttons.map(
            (button) => (
                <Button
                    height={button["height"]}
                    width={button["width"]}
                    xPos={button["xPos"]}
                     yPos={button["yPos"]}
                     key={button["name"]}
                />
            )
        )}
    </div>);
};

Room.propTypes = {
    player: PropTypes.object,
    enemies: PropTypes.array,
    platforms: PropTypes.array,
    terrain: PropTypes.array,
    coins: PropTypes.array,
    doors: PropTypes.array,
    buttons: PropTypes.array,
    stageX: PropTypes.number,
};

export default Room;