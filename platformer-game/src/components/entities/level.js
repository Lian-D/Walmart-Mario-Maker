import React from 'react';
import PropTypes from 'prop-types';
import Terrain from "./terrain";
import Coin from "./coin";
import Door from './door';
import Platform from './platform';
import Button from './button';
import {enemyHeight, enemyWidth, platformHeight, terrainHeight} from '../../data/constants';

const Level = ({player, stageX, stageY, level, buttonMap}) => {
    let style = {
        transform: `translate(-${stageX}px, ${stageY}px)`,
    };

    return (<div className='stage' style={style} >
        {player}
        {level["enemies"].map(
            (enemy,index) => (
                <span
                    className='enemy'
                    key={index}
                    style={{
                        transform: `translate(${enemy}px, 0px)`,
                        height: enemyHeight,
                        width: enemyWidth,
                    }}
                />
            ),
        )}
        {level["platforms"].map(
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
        {level["terrain"].map(
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
        
        {level["coins"].map(
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
        {level["doors"].map(
            (door) => (
                <Door 
                    xPos={door["xPos"]} 
                    yPos={door["yPos"]} 
                    key={door["name"]}
                    isOpen={buttonMap.has(door["key"])}
                />
            )
        )}
        {level["buttons"].map(
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

Level.propTypes = {
    player: PropTypes.object,
    stageX: PropTypes.number,
    stageY: PropTypes.number,
    level: PropTypes.object,
    buttonMap: PropTypes.object
};

export default Level;