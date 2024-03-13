import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';

@Module({
  imports: [ TypeOrmModule.forRoot({
    "type":"mysql",
    "host": "localhost",
    "port": 3306,
    "username":"root",
    "password":"12345",
    "database":"sistema_escuela_db",
    "entities": [__dirname + "/**/**/**.entity{.ts,.js}"],
    "synchronize": true
  }), EstudianteModule, 
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}