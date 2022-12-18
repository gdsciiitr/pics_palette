All end points are listed here -

[
  {
    path: '/api/user/:id',
    methods: [ 'PUT', 'DELETE', 'GET' ],
    middlewares: [ 'verifyToken', 'anonymous' ]
  },
  {
    path: '/api/auth/register',
    methods: [ 'POST' ],
    middlewares: [ 'multerMiddleware', 'anonymous' ]
  },
  {
    path: '/api/auth/login',
    methods: [ 'POST' ],
    middlewares: [ 'anonymous' ]
  },
  {
    path: '/api/post',
    methods: [ 'POST', 'GET' ],
    middlewares: [ 'verifyToken', 'multerMiddleware', 'anonymous' ]
  },
  {
    path: '/api/post/:id',
    methods: [ 'PUT', 'DELETE', 'GET' ],
    middlewares: [ 'verifyToken', 'anonymous' ]
  },
  {
    path: '/api/post/:id/like',
    methods: [ 'PUT' ],
    middlewares: [ 'verifyToken', 'anonymous' ]
  },
  {
    path: '/api/post/timeline/all',
    methods: [ 'GET' ],
    middlewares: [ 'verifyToken', 'anonymous' ]
  }
]