import express, { Application, Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/routes';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { NotificationService } from './socket/notifications';

dotenv.config();

export class App {
  private app: Application;
  private server: http.Server;
  private io: SocketIOServer;

  constructor(private port?: number | string) {
    this.app = express();
    this.server = http.createServer(this.app);
    this.io = new SocketIOServer(this.server, {
      cors: {
        origin: '*',
      },
    });

    this.setting();
    this.middlewares();
    this.routes();
    this.errors();
    this.initializeSocketService();
  }

  private setting() {
    this.app.set('port', this.port || process.env.PORT || 5050);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  private middlewares() {
    this.app.use(morgan('dev'));
  }

  private routes() {
    this.app.use('/api/v1', router);
  }

  private initializeSocketService() {
    NotificationService.setupSocketEvents(this.io);
  }

  private errors() {
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        res.status(500).json({ message: err.message });
      }
    );
  }

  public async listen() {
    this.server.listen(this.app.get('port'), () => {
      console.log(
        'API Gateway Server is running on PORT:',
        this.app.get('port')
      );
    });
  }
}
