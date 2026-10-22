export interface CenarioLogin{
    perfil: string;
    email: string;
    senha: string;
    esperaSucesso: boolean;
    msgEsperada?: string;
    urlEsperada: RegExp;
}

export const  ctsLogins: CenarioLogin[] =[
    {
        perfil: 'Cliente',
        email: 'user@system.com',
        senha: 'UserPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },

    {
        perfil: 'Lojista',
        email: 'lojista@system.com',
        senha: 'SellerPass123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil: 'Admin',
        email: 'admin@system.com',
        senha: 'AdminPassword123',
        esperaSucesso: true,
        urlEsperada: /painel\.html/,
    },
    {
        perfil: 'Bloqueado',
        email: 'blocked@system.com',
        senha: 'Blocked123',
        esperaSucesso: false,
        urlEsperada: /login\.html/,
    },
    {
        perfil: 'Usuario não existente',
        email: 'não_existe@system.com',
        senha: 'SenhaErrada123',
        esperaSucesso: false,
        urlEsperada: /login\.html/,
    },
    {
        perfil: 'Cliente senha incorreta',
        email: 'user@system.com',
        senha: 'SellerPass321',
        esperaSucesso: false,
        urlEsperada: /login\.html/,
    },
]
