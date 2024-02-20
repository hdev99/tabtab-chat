import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { IResponse } from '../interface'

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, IResponse<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<IResponse<T>> {
    return next.handle().pipe(
      map((payload: IResponse<T>) => {
        let message: string = payload?.message
        if (!payload?.message && payload?.status) {
          message = payload?.status.replace(new RegExp('_', 'g'), ' ').toLocaleLowerCase()
        }
        return {
          message: message || 'Something wrong here',
          status: payload?.status || 'fail',
          data: payload?.data || null,
        }
      })
    )
  }
}
