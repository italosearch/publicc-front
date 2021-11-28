import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../services/server'

const ElementContext = createContext();

export default function ElementProvider({ children }) {
  const authRef = useRef(false)
  const [isAuthenticated, setIsAuthenticated] = useState(!!(auth || {})?.currentUser)
  console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (authRef.current) {
        setIsAuthenticated(!!user)
      } else {
        authRef.current = true
      }
    });
  }, [])

  return (
    <ElementContext.Provider value={{ isAuthenticated }}>
      {children}
    </ElementContext.Provider>
  );
}

export function AuthContext() {
  const context = useContext(ElementContext)
  const { isAuthenticated } = context;
  return { isAuthenticated };
}
