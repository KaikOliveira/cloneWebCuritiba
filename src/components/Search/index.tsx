import React, { useState, useCallback } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';

import {
  Wrapper,
  Filtro,
  Header,
  LogoCity,
  Infos,
  SearchContainer,
  InputAndButton,
  Input,
  Button,
  Suggestion,
  TodosServico
} from './styles';

const Search: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(true);
  }, []);

  return (
    <Wrapper>
      <Filtro>
        <Header>
          <LogoCity />
          <Infos>
            <p>Sex 22°</p>
            <div>
              <p>Saiba mais</p>
              <IoIosArrowDown size={22} color="#fff" />
            </div>
            <div>
              <p>Entrar</p>
            </div>
          </Infos>
        </Header>

        <SearchContainer>
          <h1>O que você procura?</h1>
          <InputAndButton>
            <Input isFilled={isFilled} isFocused={isFocused}>
              <input
                type="text"
                placeholder="Ex.: IPTU, Alvará, Nota.."
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </Input>
            <Button>
              <FiSearch size={20} color="#fff" />
            </Button>
          </InputAndButton>

          <Suggestion>
            <p>Alvará Comercial</p>
            <p>Dívida Ativa</p>
            <p>IPTU</p>
            <p>ISS</p>
            <p>Refic Covid-19</p>
          </Suggestion>

          <TodosServico>
            <p>Todos os Serviços</p>
          </TodosServico>

        </SearchContainer>

      </Filtro>
    </Wrapper>
  )
}

export default Search;
