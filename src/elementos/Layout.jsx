import React, { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../componentes/navbar';
import Footer from '../componentes/Footer';

function Layout({ children }) {
  // SEO NATIVO con useEffect
  useEffect(() => {
    document.title = "Amarillo Delicias | Postres tradicionales por tamaños pequeños, medianos y grandes";
   
    // Función que actualiza meta tags
    const updateMetaTag = (name, content, attribute = 'name') => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Meta tags básicos
    updateMetaTag('description', 'Explora nuestro catálogo completo de postres. Encuentra postres, tortas, dulces. Compra en línea con los mejores precios.');
    updateMetaTag('keywords', 'tortas, quesillos, alfajores, manzana, fresa, chocolate');
    updateMetaTag('author', 'Tienda de postres');
    updateMetaTag('robots', 'index, follow');

    // Open Graph para redes sociales
    updateMetaTag('og:title', 'Tienda Amarillo Delicias | Los Mejores Postres', 'property');
    updateMetaTag('og:description', 'Descubre una amplia variedad de postres: tortas, dulces, alfajores, crumble. De todos los tamaños.', 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:url', window.location.origin, 'property');
    updateMetaTag('og:site_name', 'Tienda de Postres', 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'Tienda Amarillo Delicias | Los Mejores Postres');
    updateMetaTag('twitter:description', 'Compra los mejores postres y dulces');
    

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin;

  }, []);

  return (
    <LayoutContainer>
      <Header>
        <navbar />
      </Header>
      
      <Main >
        {children}
      </Main>
      
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </LayoutContainer>
  );
}

export default Layout;

// Styled Components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  width: 100%;
  background-color: transparent;
  z-index: 100;
`;

const Main = styled.main`
  flex: 1;
  width: 100%;
  padding: 0;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  margin-top: auto;
`;