import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  Container,
  LeftContent,
  LogoWrapper,
  LogoImage,
  MenuWrapper,
  Menu,
  Item,
  RightContent,
  FormWrapper,
  InnerContainer,
  PlanetBackground,
  SpaceSoldierImg,
} from './styles';
import { Logo } from '../../../assets/images';
import BaseText from '../../../components/BaseText';
import LoginForm from '../../components/Form/Login';

const options = [
  { label: 'Quem somos', link: '#' },
  { label: 'Nossos Catálogos', link: '#' },
];

const Login = () => {
  const [selected, setSelected] = useState({
    login: false,
    register: true,
  });
  const navigate = useNavigate();

  const handleLoginSubmit = async () => {
    /** @TODO Adicionar login aqui com useQuery e obter @params do input */
    navigate('/area-de-membros/estatisticas-gerais');
  };

  const buttonText = selected.register
    ? 'ACESSAR GATEWAY' || 'ACESSAR CHECKOUT'
    : 'ENTRAR';

  return (
    <Container>
      <PlanetBackground />
      <SpaceSoldierImg />
      <InnerContainer>
        <LeftContent>
          <LogoWrapper>
            <LogoImage src={Logo} />
            <BaseText size="h4" fontFamily="ORegular">
              Receba pagamentos de maneira eficiente,{'\n'}
              segura e sem complicações.
            </BaseText>
          </LogoWrapper>
          <MenuWrapper>
            {options.map(({ label, link }) => (
              <Menu key={label}>
                <Item href={link}>
                  <BaseText size="h6" fontFamily="OMedium" clickable>
                    {label}
                  </BaseText>
                </Item>
              </Menu>
            ))}
          </MenuWrapper>
        </LeftContent>
        <RightContent>
          <FormWrapper>
            <div style={{ paddingBlock: 24 }}>
              <Item
                style={{ marginRight: 24 }}
                onClick={() => setSelected({ login: false, register: true })}>
                <BaseText
                  size="h6"
                  fontFamily="OMedium"
                  clickable
                  active={selected.register}>
                  Criar minha conta
                </BaseText>
              </Item>
              <Item
                onClick={() => setSelected({ login: true, register: false })}>
                <BaseText
                  size="h6"
                  fontFamily="OMedium"
                  clickable
                  active={selected.login}>
                  Entrar
                </BaseText>
              </Item>
            </div>
            <LoginForm onLogin={handleLoginSubmit} buttonText={buttonText} />
          </FormWrapper>
        </RightContent>
      </InnerContainer>
    </Container>
  );
};

export default Login;
