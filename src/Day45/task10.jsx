import { useState } from "react";

export default function ShortFeedbackForm() {
  const [form, setForm] = useState({ feedback: "", rating: "", agree: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert(JSON.stringify(form, null, 2));
    setForm({ feedback: "", rating: "", agree: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        name="feedback"
        placeholder="Feedback"
        value={form.feedback}
        onChange={handleChange}
      />
      <br />
      <select name="rating" value={form.rating} onChange={handleChange}>
        <option value="">--Rate--</option>
        {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
      <br />
      <label>
        <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange}/>
        Agree
      </label>
      <br />
      <button type="submit" disabled={!form.feedback || !form.rating || !form.agree}>
        Submit
      </button>
    </form>
  );
}
