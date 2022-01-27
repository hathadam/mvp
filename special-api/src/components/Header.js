import React from 'react';
import Link from './Link';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link href="/" className="item">
        Spotify
      </Link>
      <Link href="/wikiSearch" className="item">
        WikiSearch
      </Link>
      <Link href="/imageSearch" className="item">
        ImageSearch
      </Link>
      <Link href="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
