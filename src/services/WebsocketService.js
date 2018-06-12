import io from 'socket.io-client/dist/socket.io.min';
import {WEBSOCKET_CONNECTION_URL} from './../config';

const WebsocketService = {
  listenedEvents: [],
  eventsName:{
    MESSAGE: 'message',
  },
  /**
   * check if event is already listened
   * @param event {string}
   * @return {boolean}
   */
  isAlreadyListened(event) {
    for (let i = 0, len = this.listenedEvents.length; i < len; i++) {
      if (this.listenedEvents[i] === event) {
        return true;
      }
    }
    return false;
  },
  emit(event, data) {
    this.socket.emit(event, data);
  },
  listen(event, callback) {
    // avoid duplicate listening
    if (!this.isAlreadyListened(event)) {
      this.socket.on(event, callback);

      // save current event in listened events array
      this.listenedEvents.push(event);
    }
  },
  init() {
    this.socket = io.connect(WEBSOCKET_CONNECTION_URL);
  }
};
export default WebsocketService;
