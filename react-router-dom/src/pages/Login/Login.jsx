function LoginPage() {
    return (
        <>
            <main className="text-center mx-auto w-25 border rounded px-lg-5 py-5">
                <form>
                    <img className="mb-4" src="#" alt="Logo" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Por favor, fazer login</h1>

                    <div className="text-start mb-1">
                        <label htmlFor="">Email</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="text-start mb-1">
                        <label htmlFor="">Senha</label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="checkbox mb-3">
                        <input type="checkbox" id="inputCheckbox" value={"lembrar-me"} />
                        <label htmlFor="">Lembrar-me</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2024–2025</p>
                </form>
            </main>
        </>
    )
}

export default LoginPage;
