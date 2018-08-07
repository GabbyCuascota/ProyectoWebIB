import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {UsuarioEntity} from "./usuario.entity";
import {Like, Repository} from "typeorm";

@Injectable()
export class UsuarioService {

    listaUsuarios = [
        {
            'id': 1,
            'nombre': 'Gabriela',
            'contrasena': 'gabriela10',
            'urlImg': 'https://scontent.fuio2-1.fna.fbcdn.net/v/t1.0-9/36890864_2023880064348768_1598154453213511680_n.jpg?_nc_cat=0&oh=efc672e16401378675b9da0a6a121afe&oe=5BE47A76'
        },
        {
            'id': 2,
            'nombre': 'Estefanía',
            'contrasena': '12345',
            'urlImg': 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-9/29513080_1866486613421448_7188226568437931883_n.jpg?_nc_cat=0&oh=eb43fa68cd1b59961020db7cdb06fee5&oe=5BCE9C16'
        },
        {
            'id': 3,
            'nombre': 'Martin',
            'contrasena': '12345',
            'urlImg': 'https://scontent.fuio13-1.fna.fbcdn.net/v/t1.0-9/943695_578094465566453_1752782102_n.jpg?_nc_cat=0&oh=1b3dde590ce55ebae93d12adf7fa0c24&oe=5BCE10E8'
        },
        {
            'id': 4,
            'nombre': 'Ivan',
            'contrasena': '12345',
            'urlImg': 'http://diseno.uc.cl/wp/wp-content/uploads/2016/11/Andres-6773_-500x500.jpg'
        },
        {
            'id': 5,
            'nombre': 'Miguel',
            'contrasena': '12345',
            'urlImg': 'https://www.ecestaticos.com/imagestatic/clipping/37e/2ae/37e2ae50a6bed84cddb4becb3d0fc603/esta-es-una-de-las-personas-mas-inteligentes-del-mundo-y-va-a-cambiarlo-para-siempre.jpg?mtime=1456450349'
        },
        {
            'id': 6,
            'nombre': 'Paul',
            'contrasena': '12345',
            'urlImg': 'https://static.vix.com/es/sites/default/files/styles/large/public/btg/curiosidades.batanga.com/files/Las-personas-con-ojos-azules-derivan-de-un-unico-ancestro-01.jpg?itok=xtNXQsfq'
        },
        {
            'id': 7,
            'nombre': 'Evelyn',
            'contrasena': '12345',
            'urlImg': 'https://prod.media.wapa.pe/670x376/wapa/imagen/2017/07/01/Nota-8461-personas_distraidas.jpg'
        },
        {
            'id': 8,
            'nombre': 'Jose',
            'contrasena': '12345',
            'urlImg': 'http://www.misimagenesde.com/wp-content/uploads/2012/01/imagenes-de-personas.jpg'
        }
    ];

    constructor(@InjectRepository(UsuarioEntity)
                private readonly usuarioRepository: Repository<UsuarioEntity>) {
    }

    crearUsuario() {
        for (var usuarios in this.listaUsuarios) {
            const usuario = new UsuarioEntity();
            usuario.id = this.listaUsuarios[usuarios].id;
            usuario.nombre = this.listaUsuarios[usuarios].nombre;
            usuario.contrasena = this.listaUsuarios[usuarios].contrasena;
            usuario.urlImg = this.listaUsuarios[usuarios].urlImg;
            this.usuarioRepository.save(usuario);
        }
        return this.usuarioRepository.find();
    }

    async traerTodos(): Promise<UsuarioEntity[]> {
        return await this.usuarioRepository.find();
    }

    async obtenerUsuarioPorNombre(nombreArgumento) {
        return await this.usuarioRepository.createQueryBuilder("usuario").where("usuario.nombre = :nombre", {nombre: nombreArgumento}).getOne();
    }

    async buscar(parametroBusqueda) {

        return await this.usuarioRepository.find({nombre: Like("%" + parametroBusqueda + "%")});
    }

    async obtenerUsuarioPorId(idUsuario) {
        return await this.usuarioRepository.find({where: {id: idUsuario}})
    }
}