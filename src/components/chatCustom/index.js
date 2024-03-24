import { View, Text, Button } from 'react-native'
import React from 'react'
import styles from './styles'
import { Avatar } from '@rneui/base'

const ChatCustom = (props) => {
    const { source, textBar, textTimer, source2, textBar2, textTimer2 } = props
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: 'row' }}>
                <Avatar
                    size={20}
                    rounded
                    source={require('../../assets/images/winni2.png')}
                    containerStyle={{
                        top: 25,
                        left: 15
                    }}
                />
                <View style={styles.chatBar}>
                    <Text style={styles.textBar}>{'Hey,How are you ?'}</Text>
                </View>
            </View>
            <View style={{ right: 90 }}>
                <Text style={styles.textTimer}>{'10/01/2022 06:57 AM'}</Text>
            </View>

            <View style={{ flexDirection: 'row', left: 210 }}>
                <Avatar
                    size={20}
                    rounded
                    source={require('../../assets/images/winni.png')}
                    containerStyle={{
                        top: 25,
                        left: 170
                    }}
                />
                <View style={styles.chatBar2}>
                    <Text style={styles.textBar2}>{'Hey'}</Text>
                </View>
            </View>
            <View style={{ left: 110 }}>
                <Text style={styles.textTimer2}>{'10/01/2022 06:57 AM'}</Text>
            </View>
            <View style={{ flexDirection: 'row', left: 210 }}>
                <Avatar
                    size={20}
                    rounded
                    source={require('../../assets/images/winni.png')}
                    containerStyle={{
                        top: 25,
                        left: 170
                    }}
                />
                <View style={styles.chatBar2}>
                    <Text style={styles.textBar2}>{'I’m good, you say'}</Text>
                </View>
            </View>
            <View style={{ left: 110 }}>
                <Text style={styles.textTimer2}>{'10/01/2022 06:57 AM'}</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <Avatar
                    size={20}
                    rounded
                    source={require('../../assets/images/winni2.png')}
                    containerStyle={{
                        top: 25,
                        left: 15
                    }}
                />
                <View style={styles.chatBar}>
                    <Text style={styles.textBar}>{'I’m good too'}</Text>
                </View>
            </View>
            <View style={{ right: 90 }}>
                <Text style={styles.textTimer}>{'10/01/2022 06:57 AM'}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Avatar
                    size={20}
                    rounded
                    source={require('../../assets/images/winni2.png')}
                    containerStyle={{
                        top: 25,
                        left: 15
                    }}
                />
                <View style={styles.chatBar}>
                    <Text style={styles.textBar}>{'Whats’up'}</Text>
                </View>
            </View>
            <View style={{ right: 90 }}>
                <Text style={styles.textTimer}>{'10/01/2022 06:57 AM'}</Text>
            </View>
        </View>
    )
}

export default ChatCustom