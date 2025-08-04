import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  }

  function validate() {
    const newErrors = {};

    if (!form.name) newErrors.name = 'Kötelező';
    if (!form.email) {
      newErrors.email = 'Kötelező';
    } else if (!form.email.includes('@')) {
      newErrors.email = 'Érvénytelen email';
    }
    if (!form.message) newErrors.message = 'Kötelező';

    setErrors(newErrors);
    return Object.keys(newErrors).length == 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      console.log('Küldés:', form);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(function () {
        setSuccess(false);
      }, 3000);
    }
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" style={{color:"white"}}>Név</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${errors.name ? 'border-red-500' : ''}`}
            style={{backgroundColor:"white"}}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1"  style={{color:"white"}}>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
             style={{backgroundColor:"white"}}
            className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1"  style={{color:"white"}}>Üzenet</label>
          <textarea
            name="message"
            value={form.message}
             style={{backgroundColor:"white"}}
            onChange={handleChange}
            rows="4"
            className={`w-full p-2 border rounded ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Küldés
        </button>
      </form>
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded" style={{marginTop:"10px"}}>
          Köszönjük az üzenetet!
        </div>
      )}
    </div>
  );
}

export default ContactForm;