import { useFormik } from 'formik';

export function Form(){
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      state: '',
      phone: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Nome</label>
      <input
        id="name"
        name="name"
        type="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <label htmlFor="address">Endereço</label>
      <input
        id="address"
        name="address"
        type="address"
        onChange={formik.handleChange}
        value={formik.values.address}
      />
      <label htmlFor="city">Cidade</label>
      <input
        id="city"
        name="city"
        type="city"
        onChange={formik.handleChange}
        value={formik.values.city}
      />
      <label htmlFor="state">UF</label>
      <input
        id="state"
        name="state"
        type="state"
        onChange={formik.handleChange}
        value={formik.values.state}
      />
      <label htmlFor="phone">Telefone</label>
      <input
        id="phone"
        name="phone"
        type="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
      <button type="submit">Submit</button>
    </form>
  );
};