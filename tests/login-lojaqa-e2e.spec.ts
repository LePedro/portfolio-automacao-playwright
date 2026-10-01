import { test, expect } from '@playwright/test';

const BASE_URL = 'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login';

test.describe('ato 1 - validar carregamento e visibilidade de elementos', async () => {

    test('Validar título e carregamento da página', async ({ page }) => {
        //Navegar até página de login
        await page.goto(`${BASE_URL}/login.html`)
        //Validar título
        await expect(page).toHaveTitle(/LojaQA | Entrar/i)
    });
    test('Verificar exibição dos campos do form de login', async ({ page }) => {
        //Navegar até página de login
        await page.goto(`${BASE_URL}/login.html`)

        //validar campos
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#password')).toBeVisible();
        await expect(page.locator('#loginBtn')).toBeVisible();
        //verificar se btn está desativado
        await expect(page.locator('#loginBtn')).toBeDisabled();


    });
});

test.describe('ato 2 - caminho feliz', ()=>{
    test('Validar acesso e redirecionar ao painel', async({page})=>{
        //Navegar até página de login
        await page.goto(`${BASE_URL}/login.html`);
        //Preencher campos utilizando o fill()
        await page.fill('#email','admin@system.com');
        await page.fill('#password','AdminPassword123');
        //Validar botão ativo
        await expect(page.locator('#loginBtn')).toBeEnabled();
        //Ação de clique
        await page.click('#loginBtn');
        //Validar o redirecionamento para a página /painel
        await expect(page).toHaveURL(/painel\.html/);
    });
});