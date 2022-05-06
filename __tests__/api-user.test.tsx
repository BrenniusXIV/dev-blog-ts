import { createMocks } from 'node-mocks-http';
import requestUserByIdHandler from '../pages/api/user/[id]';

describe('api/user/[id]', () => {
    it('GETs a user', async () => {
        const { req, res } = createMocks({
            method: "GET",
            query: {
                id: process.env.API_USER_TEST_ID
            }
        })

        await requestUserByIdHandler(req, res)

        expect(res._getStatusCode()).toBe(200);
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                name: "Jacen Solo"
            })
       )

    });

    it('updates a user',  async () => {
        const { req, res } = createMocks({
            method: "PUT",
            query: {
                id: process.env.API_USER_TEST_ID
            },
            body: {
                email: "caedus@gag.gov"
            }
        })

        await requestUserByIdHandler(req, res)

        expect(res._getStatusCode()).toBe(200)
        expect(JSON.parse(res._getData())).toEqual(
            expect.objectContaining({
                email: "caedus@gag.gov"
            })
        )
    });

})

