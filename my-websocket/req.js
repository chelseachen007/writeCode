const IncomingMessage= {
    _readableState:
     ReadableState {
       objectMode: false,
       highWaterMark: 16384,
       buffer: BufferList { head: null, tail: null, length: 0 },
       length: 0,
       pipes: null,
       pipesCount: 0,
       flowing: null,
       ended: true,
       endEmitted: false,
       reading: false,
       sync: true,
       needReadable: false,
       emittedReadable: true,
       readableListening: false,
       resumeScheduled: false,
       paused: true,
       emitClose: true,
       autoDestroy: false,
       destroyed: false,
       defaultEncoding: 'utf8',
       awaitDrain: 0,
       readingMore: true,
       decoder: null,
       encoding: null },
    readable: true,
    _events:
     [Object: null prototype] { end: [Function: resetHeadersTimeoutOnReqEnd] },
    _eventsCount: 1,
    _maxListeners: undefined,
    socket:
     Socket {
       connecting: false,
       _hadError: false,
       _handle:
        TCP {
          reading: true,
          onread: [Function: onStreamRead],
          onconnection: null,
          _consumed: true,
          [Symbol(owner)]: [Circular] },
       _parent: null,
       _host: null,
       _readableState:
        ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: null,
          pipesCount: 0,
          flowing: null,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          paused: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          defaultEncoding: 'utf8',
          awaitDrain: 0,
          readingMore: false,
          decoder: null,
          encoding: null },
       readable: true,
       _events:
        [Object: null prototype] {
          end: [Function: onReadableStreamEnd],
          timeout: [Function: socketOnTimeout] },
       _eventsCount: 2,
       _maxListeners: undefined,
       _writableState:
        WritableState {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: 'utf8',
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: [Function: bound onwrite],
          writecb: null,
          writelen: 0,
          bufferedRequest: null,
          lastBufferedRequest: null,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          bufferedRequestCount: 0,
          corkedRequestsFree: [Object] },
       writable: true,
       allowHalfOpen: true,
       _sockname: null,
       _pendingData: null,
       _pendingEncoding: '',
       server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::9998',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(asyncId)]: 5 },
       _server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::9998',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(asyncId)]: 5 },
       timeout: 120000,
       parser: null,
       on: [Function: socketOnWrap],
       _paused: false,
       [Symbol(asyncId)]: 7,
       [Symbol(lastWriteQueueSize)]: 0,
       [Symbol(timeout)]:
        Timeout {
          _called: false,
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 132709,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(unrefed)]: true,
          [Symbol(asyncId)]: 8,
          [Symbol(triggerId)]: 7 },
       [Symbol(kBytesRead)]: 0,
       [Symbol(kBytesWritten)]: 0 },
    connection:
     Socket {
       connecting: false,
       _hadError: false,
       _handle:
        TCP {
          reading: true,
          onread: [Function: onStreamRead],
          onconnection: null,
          _consumed: true,
          [Symbol(owner)]: [Circular] },
       _parent: null,
       _host: null,
       _readableState:
        ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: null,
          pipesCount: 0,
          flowing: null,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          paused: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          defaultEncoding: 'utf8',
          awaitDrain: 0,
          readingMore: false,
          decoder: null,
          encoding: null },
       readable: true,
       _events:
        [Object: null prototype] {
          end: [Function: onReadableStreamEnd],
          timeout: [Function: socketOnTimeout] },
       _eventsCount: 2,
       _maxListeners: undefined,
       _writableState:
        WritableState {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: 'utf8',
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: [Function: bound onwrite],
          writecb: null,
          writelen: 0,
          bufferedRequest: null,
          lastBufferedRequest: null,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          bufferedRequestCount: 0,
          corkedRequestsFree: [Object] },
       writable: true,
       allowHalfOpen: true,
       _sockname: null,
       _pendingData: null,
       _pendingEncoding: '',
       server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::9998',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(asyncId)]: 5 },
       _server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::9998',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(asyncId)]: 5 },
       timeout: 120000,
       parser: null,
       on: [Function: socketOnWrap],
       _paused: false,
       [Symbol(asyncId)]: 7,
       [Symbol(lastWriteQueueSize)]: 0,
       [Symbol(timeout)]:
        Timeout {
          _called: false,
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 132709,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(unrefed)]: true,
          [Symbol(asyncId)]: 8,
          [Symbol(triggerId)]: 7 },
       [Symbol(kBytesRead)]: 0,
       [Symbol(kBytesWritten)]: 0 },
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    httpVersion: '1.1',
    complete: true,
    headers:
     { host: 'localhost:9998',
       connection: 'Upgrade',
       pragma: 'no-cache',
       'cache-control': 'no-cache',
       'user-agent':
        'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
       upgrade: 'websocket',
       origin: 'file://',
       'sec-websocket-version': '13',
       'accept-encoding': 'gzip, deflate, br',
       'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
       cookie:
        'SL_G_WPT_TO=zh; SL_GWPT_Show_Hide_tmp=undefined; SL_wptGlobTipTmp=undefined',
       'sec-websocket-key': 'FTITyteV6VRogsECiEqIAA==',
       'sec-websocket-extensions': 'permessage-deflate; client_max_window_bits' },
    rawHeaders:
     [ 'Host',
       'localhost:9998',
       'Connection',
       'Upgrade',
       'Pragma',
       'no-cache',
       'Cache-Control',
       'no-cache',
       'User-Agent',
       'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36',
       'Upgrade',
       'websocket',
       'Origin',
       'file://',
       'Sec-WebSocket-Version',
       '13',
       'Accept-Encoding',
       'gzip, deflate, br',
       'Accept-Language',
       'zh-CN,zh;q=0.9,en;q=0.8',
       'Cookie',
       'SL_G_WPT_TO=zh; SL_GWPT_Show_Hide_tmp=undefined; SL_wptGlobTipTmp=undefined',
       'Sec-WebSocket-Key',
       'FTITyteV6VRogsECiEqIAA==',
       'Sec-WebSocket-Extensions',
       'permessage-deflate; client_max_window_bits' ],
    trailers: {},
    rawTrailers: [],
    aborted: false,
    upgrade: true,
    url: '/',
    method: 'GET',
    statusCode: null,
    statusMessage: null,
    client:
     Socket {
       connecting: false,
       _hadError: false,
       _handle:
        TCP {
          reading: true,
          onread: [Function: onStreamRead],
          onconnection: null,
          _consumed: true,
          [Symbol(owner)]: [Circular] },
       _parent: null,
       _host: null,
       _readableState:
        ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: null,
          pipesCount: 0,
          flowing: null,
          ended: false,
          endEmitted: false,
          reading: true,
          sync: false,
          needReadable: true,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          paused: false,
          emitClose: false,
          autoDestroy: false,
          destroyed: false,
          defaultEncoding: 'utf8',
          awaitDrain: 0,
          readingMore: false,
          decoder: null,
          encoding: null },
       readable: true,
       _events:
        [Object: null prototype] {
          end: [Function: onReadableStreamEnd],
          timeout: [Function: socketOnTimeout] },
       _eventsCount: 2,
       _maxListeners: undefined,
       _writableState:
        WritableState {
          objectMode: false,
          highWaterMark: 16384,
          finalCalled: false,
          needDrain: false,
          ending: false,
          ended: false,
          finished: false,
          destroyed: false,
          decodeStrings: false,
          defaultEncoding: 'utf8',
          length: 0,
          writing: false,
          corked: 0,
          sync: true,
          bufferProcessing: false,
          onwrite: [Function: bound onwrite],
          writecb: null,
          writelen: 0,
          bufferedRequest: null,
          lastBufferedRequest: null,
          pendingcb: 0,
          prefinished: false,
          errorEmitted: false,
          emitClose: false,
          autoDestroy: false,
          bufferedRequestCount: 0,
          corkedRequestsFree: [Object] },
       writable: true,
       allowHalfOpen: true,
       _sockname: null,
       _pendingData: null,
       _pendingEncoding: '',
       server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::9998',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(asyncId)]: 5 },
       _server:
        Server {
          _events: [Object],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 1,
          _handle: [TCP],
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          httpAllowHalfOpen: false,
          timeout: 120000,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          headersTimeout: 40000,
          _connectionKey: '6::::9998',
          [Symbol(IncomingMessage)]: [Function],
          [Symbol(ServerResponse)]: [Function],
          [Symbol(asyncId)]: 5 },
       timeout: 120000,
       parser: null,
       on: [Function: socketOnWrap],
       _paused: false,
       [Symbol(asyncId)]: 7,
       [Symbol(lastWriteQueueSize)]: 0,
       [Symbol(timeout)]:
        Timeout {
          _called: false,
          _idleTimeout: 120000,
          _idlePrev: [TimersList],
          _idleNext: [TimersList],
          _idleStart: 132709,
          _onTimeout: [Function: bound ],
          _timerArgs: undefined,
          _repeat: null,
          _destroyed: false,
          [Symbol(unrefed)]: true,
          [Symbol(asyncId)]: 8,
          [Symbol(triggerId)]: 7 },
       [Symbol(kBytesRead)]: 0,
       [Symbol(kBytesWritten)]: 0 },
    _consuming: false,
    _dumped: false,
    parser: null }