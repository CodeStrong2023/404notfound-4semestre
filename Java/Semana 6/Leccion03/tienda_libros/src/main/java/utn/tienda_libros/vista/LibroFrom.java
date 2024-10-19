package utn.tienda_libros.vista;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import utn.tienda_libros.servicio.LibroServicio;
import utn.tienda_libros.modelo.Libro;

import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

@Component
public class LibroFrom extends JFrame {
    private LibroServicio libroServicio;
    private JLabel panel;
    private JTable tablaLibros;
    private JTextField idTexto;
    private JTextField libroTexto;
    private JTextField autorTexto;
    private JTextField precioTexto;
    private JTextField existenciasTexto;
    private JButton agregarButton;
    private DefaultTableModel tablaModeloLibros;

    @Autowired
    public LibroFrom(LibroServicio libroServicio) {
        this.libroServicio = libroServicio;
        iniciarForma();
        agregarButton.addActionListener(e -> agregarLibro());

        tablaLibros.addActionListener(new mouseAdapter(){
            @Override
            public void mouseClicked(MouseEvent e){
                super.mouseClicked(e);
                cargarLibroSeleccionado();
            }
        });
        modificarButton.addActionListener(e -> modificarLibro();

        )
    }

    private void iniciarForma() {
        setContentPane(panel);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setVisible(true);
        setSize(900, 700);
        // Para obtener las dimensiones de la ventana
        Toolkit toolkit = Toolkit.getDefaultToolkit();
        Dimension tamanioPantalla = toolkit.getScreenSize();
        int x = (tamanioPantalla.width - getWidth()) / 2;
        int y = (tamanioPantalla.height - getHeight()) / 2;
        setLocation(x, y);
    }

    private void agregarLibro() {
        //Leer los valores del formulario
        if (libroTexto.getText().equals("")) {
            mostrarMensaje("Ingresar el nombre del libro");
            libroTexto.requestFocusInWindow();
            return;
        }

        var nombreLibro = libroTexto.getText();
        var autor = autorTexto.getText();
        var precio = Double.parseDouble(precioTexto.getText());
        var existencias = Integer.parseInt(existenciasTexto.getText());

        // Creamos el objeto libro.
        var libro = new Libro(null, nombreLibro, autor, precio, existencias);
        //libro.setNombreLibro(nombreLibro);
        //libro.setAutor(autor);
        //libro.setPrecio(precio);
        //libro.setExistencias(existencias);
        this.libroServicio.guardarLibro(libro);
        mostrarMensaje("Se agregó el libro...");
        limpiarFormulario();
        listarLibros();
    }

        private void cargarLibroSeleccionado(){
            //Los indices de las columnas inician en 0
            var renglon = tabla.Libros.getSelectedRow ();
            if (renglon != -1){
            String idLibro = tablaLibros.getModel().getValueAt(renglon, 0).toString();
            idTexto.setText(idLibro);
            String nombreLibro = tablaLibros.getModel().getValueAt(renglon, 1).toString();
            libroTexto.setText(nombreLibro);
            String autor = tablaLibros.getModel().getValueAt(renglon, 2).toString();
            autorTexto.setText(autor);
            String precio = tablaLibros.getModel().getValueAt(renglon, 3).toString();
            precioTexto.setText(precio);
            String existencias = tablaLibros.getModel().getValueAt(renglon, 4).toString();
            existenciasTexto.setText(existencias);
            }
        }

        private void modificarLibro(){
        if(this.idTexto.equals("")){
            mostrarMensaje("Debes selecionar un registro en la tabla");
        }
        else {
            //Verificamos que el nombre del libro no sea nulo
            if(libroTexto.getText().equals("")){
                mostrarMensaje("Digite el nombre del libro. . . ");
                libroTexto.requestFocusInWindow();
                return;
            }

        }
    }

    private void limpiarFormulario(){
        libroTexto.setText("");
        autorTexto.setText("");
        precioTexto.setText("");
        existenciasTexto.setText("");
    }

    private void mostrarMensaje(String mensaje) {
        JOptionPane.showMessageDialog(this, mensaje);
    }

    private void createUIComponents() {
        idTexto = new JTextField("");
        idTexto.setVisible(false);
        this.tablaModeloLibros = new DefaultTableModel(0, 5);
        String[] cabecera = {"Id" , "Libro", "Autor", "Precio", "Existencias"};
        this.tablaModeloLibros.setColumnIdentifiers(cabecera);
        // Instanciar eI de JTable
        this.tablaLibros = new JTable(tablaModeloLibros);
        listarLibros ();

    }

    private void listarLibros(){
        //Limpiar la tabla
        tablaModeloLibros.setRowCount(0);
        //Obtener los libros de la base de datos
        var libros = libroServicio.listarLibros();
        //Iteramos cada libro
        libros.forEach((libro) -> {//Función lambda
            //Creamos cada registro ara agregarlos la tabla
            Object [] renglonLibro = {
                libro.getIdLibro(),
                libro.getNombreLibro(),
                libro.getAutor(),
                libro.getPrecio(),
                libro.getExistencias()
            };
            this.tablaModeloLibros.addRow(renglonLibro);
        });
    }
}
