import 'reflect-metadata'

import * as http from 'http'

import { AppModule } from './app/app.module'
import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NextApiHandler } from 'next'

export class Backend {
  static app: INestApplication

  static async getApp(): Promise<INestApplication> {
    if (!this.app) {
      this.app = await NestFactory.create(AppModule, { bodyParser: false })
      this.app.setGlobalPrefix('api')

      await this.app.init()
    }

    return this.app
  }

  static async getListener(): Promise<NextApiHandler<any>> {
    const app = await this.getApp()
    const server: http.Server = app.getHttpServer()
    const [listener] = server.listeners('request') as NextApiHandler[]
    return listener
  }
}
