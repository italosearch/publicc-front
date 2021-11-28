import { useEffect } from 'react'

import Router from 'next/router'

import { AuthContext } from '../contexts/Auth';

import CadastroTemplate from '../templates/Cadastro'

function Cadastro() {
  const { isAuthenticated } = AuthContext()
  const realeasePage = isAuthenticated

  useEffect(() => {
    if (realeasePage) {
      Router.push('/')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [realeasePage])

  if (realeasePage) return <div>Carregando..</div>
  return <CadastroTemplate />
}

export default Cadastro;
