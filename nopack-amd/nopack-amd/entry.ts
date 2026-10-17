declare var requirejs;

requirejs.config({
  paths: {
    'react': './node_modules/react/umd/react.development',
    'react-dom/client': './node_modules/react-dom/umd/react-dom.development'
  }
});

requirejs(['./index']);