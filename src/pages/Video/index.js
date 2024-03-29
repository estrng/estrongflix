import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import SubPageRoot from "../../components/SubPageRoot";
import useForm from "../../hooks/useForm";
import FormField from "../../components/FormField";
import Videos from "../../repositories/videos";
import categoriasRepository from "../../repositories/categorias";

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);

  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values, clearForm } = useForm({
    titulo: "",
    url: "",
    categoria: "",
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  async function onSubmitHandler(event) {
    event.preventDefault();

    const { id } = categorias.find(
      (categoria) => categoria.titulo === values.categoria
    );

    await Videos.insert({
      categoriaId: id,
      titulo: values.titulo,
      url: values.url,
    })
      .then(() => {
        clearForm(values);
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <SubPageRoot>
      <h1>Cadastro de Video</h1>

      <form onSubmit={onSubmitHandler}>
        <FormField
          id="titulo"
          label="Título do Vídeo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          id="url"
          label="URL"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          id="categoria"
          label="Categoria"
          value={values.categoria}
          suggestions={categoryTitles}
          onChange={handleChange}
        />

        <button className="sumitButton" type="submit">
          Adicionar video
        </button>
      </form>

      <br />
      <br />

      <Link to="/categoria">Cadastrar Categoria</Link>
    </SubPageRoot>
  );
}

export default CadastroVideo;
