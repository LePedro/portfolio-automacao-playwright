import { test, expect, request } from "@playwright/test";

const APIUrl = 'https://api-qa-fap2026.onrender.com/api'

test.describe('teste api lojaQA', () => {

    test("GET catálogo lojaQA", async ({ request }) => {
        const res = await request.get(`${APIUrl}/products`)
        //Validar status code 200
        expect(res.status()).toBe(200);
        //Validar se status entre 200 a 299(Status de sucesso de api ok)
        expect(res.ok).toBeTruthy();

        const bodyRes = await res.json();
        const primeiroProd = bodyRes[0];

        expect(primeiroProd).toHaveProperty("_id", "6abe51a2384f04df16c614fe");
        expect(primeiroProd).toHaveProperty("name");
        expect(typeof primeiroProd.name).toBe('string');

    })

    test("POST login lojaQA", async ({ request }) => {
        const res = await request.post(`${APIUrl}/login`,
            {
                data: {
                    "email": "admin@system.com",
                    "password": "AdminPassword123"
                },
                headers: { 'Content-Type': 'application/json' }
            }
        );
        //Valida status 200
        expect(res.status()).toBe(200);
        //Validar json
        const resBody = await res.json();
        const segundoProd = resBody[0];

        expect(resBody).toHaveProperty("token");
        expect(typeof resBody.token).toBe('string');
        expect(resBody.token.length).toBeGreaterThan(10);


    });
});