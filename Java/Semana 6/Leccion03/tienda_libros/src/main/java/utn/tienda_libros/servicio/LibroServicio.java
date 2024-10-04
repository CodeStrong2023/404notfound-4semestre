package utn.tienda_libros.servicio;

import org.springframeword.stereotype.Service;

@Service

public class LibroServicio implements ILibroServicio {

    @Autowired
    private LibroRepsitorio libroRepsitorio;

    @Override
    public List<Libro> listarLibros() {
        return libroRepositorio.findAll();
    }

    @Override
    public Libro buscarLibroPorId(Integer idLibro) {
        Libro libro = libroRepsitorio.findById(idLibro).orElse(null);
        return libro;
    }

    @Override
    public void guardarLibro(Libro libro) {
        libroRepositorio.save(libro);
    }

    @Override
    public void eliminarLibro(Libro libro) {
        libroRepositorio.delete(libro);
    }
}



