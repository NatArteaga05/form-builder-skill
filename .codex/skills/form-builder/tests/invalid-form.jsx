function InvalidForm() {
  return (
    <form>
      <input id="email" name="email" type="email" />

      <label htmlFor="missing-id">Field without an id</label>
      <input name="no-id" type="text" />

      <label htmlFor="no-name">Field without a name</label>
      <input id="no-name" type="text" />

      <label htmlFor="password">Password</label>
      <input id="password" name="password" type="text" />

      <button type="submit">Submit</button>
    </form>
  )
}

export default InvalidForm
