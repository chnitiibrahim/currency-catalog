import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService {
  /**
   * Logs with css style
   * @param msg : message
   * @param style : style
   */
  static logWithStyle(msg: string, style: string = ''): void {
    console.log('%c ' + msg, style);
  }

  /**
   * Simple log
   * @param msg : message
   */
  static log(msg: string): void {
    console.log(msg);
  }

  /**
   * Error log
   * @param msg : message
   * @param obj : object
   */
  static error(msg: string, obj = {}): void {
    console.error(msg, obj);
  }
}
