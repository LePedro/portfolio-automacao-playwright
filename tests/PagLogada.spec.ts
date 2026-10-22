import { test, expect } from '../fixtures/auth.fixture';

test.describe('Acesso área protegida - painel', () => {

    test('Deve acessar painel com usuário já logado', async ({ loggedPage }) => {

        //Validar se está na página de painel
        await expect(loggedPage).toHaveURL(/painel\.html/);

        //Verificar existência de título h1
        const h1Painel = loggedPage.locator('#panelTitle');
        await expect(h1Painel).toBeVisible();

        //Verificar presença do bt loggout
        const btSair = loggedPage.locator('#logoutButton');
        await expect(btSair).toBeVisible();
    });

});