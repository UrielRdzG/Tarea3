package com.UrielRdzG.tarea3.dao;

import com.UrielRdzG.tarea3.models.Usuario;
import java.util.List;

public interface UsuarioDao {

    List<Usuario> getUsuarios();

    void eliminar(Long id);

    void registrar(Usuario usuario);

    Usuario obtenerUsuarioPorCredenciales(Usuario usuario);}
