import { useState } from "react"

export default function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("")
  const [error, setError] = useState("")

  function handleSubmit(event) {
    event.preventDefault()

    if (!name && !quantity) {
      setError("Du må fylle inn både vare og antall.")
      return
    }

    if (!name) {
      setError("Du må skrive inn navnet på varen.")
      return
    }

    if (!quantity) {
      setError("Du må skrive inn antall.")
      return
    }

    onAddItem(name, Number(quantity))

    setName("")
    setQuantity("")
    setError("")
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Vare
          <input
            type="text"
            placeholder="Egg..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Antall
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        <button type="submit">Legg til vare</button>
      </form>

      {error && <p>{error}</p>}
    </section>
  );
}
