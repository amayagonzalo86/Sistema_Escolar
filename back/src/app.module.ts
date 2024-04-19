import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteModule } from './estudiante/estudiante.module';
import { GeneroModule } from './genero/genero.module';
import { TutorModule } from './tutor/tutor.module';
import { MatriculaModule } from './matricula/matricula.module';
import { EscuelaModule } from './escuela/escuela.module';
import { TelefonoModule } from './telefono/telefono.module';
import { EmailModule } from './email/email.module';

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
  }), EstudianteModule, GeneroModule, TutorModule, MatriculaModule, EscuelaModule, TelefonoModule, EmailModule, 
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}