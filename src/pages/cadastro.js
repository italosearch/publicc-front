import { useEffect } from 'react'

import Router from 'next/router'

import { AuthContext } from '../contexts/Auth';

import CadastroTemplate from '../templates/Cadastro'

function Cadastro() {
  const { isAuthenticated } = AuthContext()

  useEffect(() => {
    if (isAuthenticated) {
      Router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  if (isAuthenticated) return <div>Carregando...</div>
  return <CadastroTemplate />
}

export default Cadastro;
