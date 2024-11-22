//INICIALIZAÇÃO DO F7 QUANDO DISPOSITIVO ESTÁ PRONTO
document.addEventListener('deviceready', onDeviceReady, false);
var app = new Framework7({
  // App root element
  el: '#app',
  // App Name
  name: 'SafeAlert',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: true,
  },
  dialog: {
    buttonOk: 'Sim',
    buttonCancel: 'Cancelar',
  },
  // Add default routes
  routes: [
    {
      path: '/index/',
      url: 'index.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		$("#menuPrincipal").show("fast");
		
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
			$getScript('js/index.js');
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/config/',
      url: 'config.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/contatos/',
      url: 'contatos.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/gps/',
      url: 'gps.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
    {
      path: '/sobre/',
      url: 'sobre.html',
      animate: false,
	  on: {
		pageBeforeIn: function (event, page) {
		// fazer algo antes da página ser exibida
		},
		pageAfterIn: function (event, page) {
		// fazer algo depois da página ser exibida
		},
		pageInit: function (event, page) {
		// fazer algo quando a página for inicializada
		},
		pageBeforeRemove: function (event, page) {
		// fazer algo antes da página ser removida do DOM
		},
	  }
    },
	{
		path: '/conta/',
		url: 'conta.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  $("#menuPrincipal").hide("fast");
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
	  {
		path: '/permissoes/',
		url: 'permissoes.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  $("#menuPrincipal").hide("fast");
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
	  {
		path: '/faleconosco/',
		url: 'faleconosco.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  $("#menuPrincipal").hide("fast");
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
	  {
		path: '/notificacoes/',
		url: 'notificacoes.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  $("#menuPrincipal").hide("fast");
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
	  {
		path: '/creditos/',
		url: 'creditos.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
	  {
		path: '/cadastro/',
		url: 'cadastro.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
	  {
		path: '/login/',
		url: 'login.html',
		animate: false,
		on: {
		  pageBeforeIn: function (event, page) {
		  // fazer algo antes da página ser exibida
		  },
		  pageAfterIn: function (event, page) {
		  // fazer algo depois da página ser exibida
		  },
		  pageInit: function (event, page) {
		  // fazer algo quando a página for inicializada
		  },
		  pageBeforeRemove: function (event, page) {
		  // fazer algo antes da página ser removida do DOM
		  },
		}
	  },
  ],
  // ... other parameters
});

//Para testes direto no navegador
var mainView = app.views.create('.view-main', { url: '/index/' });

//EVENTO PARA SABER O ITEM DO MENU ATUAL
app.on('routeChange', function (route) {
  var currentRoute = route.url;
  console.log(currentRoute);
  document.querySelectorAll('.tab-link').forEach(function (el) {
    el.classList.remove('active');
  });
  var targetEl = document.querySelector('.tab-link[href="' + currentRoute + '"]');
  if (targetEl) {
    targetEl.classList.add('active');
  }
});


function onDeviceReady() {
  //Quando estiver rodando no celular
var mainView = app.views.create('.view-main', { url: '/index/' });

  //COMANDO PARA "OUVIR" O BOTAO VOLTAR NATIVO DO ANDROID 	
  document.addEventListener("backbutton", function (e) {

    if (mainView.router.currentRoute.path === '/index/') {
      e.preventDefault();
      app.dialog.confirm('Deseja sair do aplicativo?', function () {
        navigator.app.exitApp();
      });
    } else {
      e.preventDefault();
      mainView.router.back({ force: true });
    }
  }, false);

}
