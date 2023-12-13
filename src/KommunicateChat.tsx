import React, { useEffect } from 'react';
import { kommunicateConfig } from './kommunicate.config';

const KommunicateChat: React.FC = () => {
  useEffect(() => {
    (function (d, m) {
      var kommunicateSettings = { ...kommunicateConfig };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      window.kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return <div></div>;
};

export default KommunicateChat;
