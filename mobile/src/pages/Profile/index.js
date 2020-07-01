import React from 'react';

import Container from '~/components/Container';
import {
  Area,
  HeaderStatus,
  Status,
  Coins,
  Coin,
  Value,
  TextValue,
  Photo,
  Level,
  TextLevel,
  TextCoins,
  Trophy,
} from './styles';

const Profile = () => {
  return (
    <Container>
      <Area>
        <HeaderStatus>
          <Status>
            <Photo
              source={{
                uri:
                  'https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg',
              }}
            />
            <Level>
              <TextLevel>NÍVEL 100</TextLevel>
            </Level>
          </Status>
          <Status>
            <Coin source={require('../../assets/profile/coin.png')} />
            <Coins>
              <TextCoins>3000</TextCoins>
            </Coins>
          </Status>
          <Status>
            <Value>
              <TextValue>200</TextValue>
            </Value>
            <Trophy
              source={{
                uri:
                  'https://images.vexels.com/media/users/3/153916/isolated/lists/c10e8d00b250c7051474d6b4c08ee3a6-icone-de-traco-colorido-trofeu-esportes.png',
              }}
            />
          </Status>
        </HeaderStatus>
      </Area>
    </Container>
  );
};

export default Profile;
