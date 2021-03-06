import { logError } from 'src/utils/log';
import {
    getArticlesApi,
    getArticleByIdApi,
    addArticleApi,
    getArticlesByTagidApi
} from 'src/api/list/article';
import { IResData } from 'src/types/api/common';
import { ReqGetArticlesBody } from 'src/types/api/article/request/getArticles';
import { ResArticlesBody } from 'src/types/api/article/response/getArticles';
import { ReqAddArticleBody } from 'src/types/api/article/request/addArticle';

export async function getArticlesServe(body: ReqGetArticlesBody = {}) {
    try {
        return (await getArticlesApi<IResData<ResArticlesBody>>(body)).data.body;
    } catch (error) {
        logError(error);
    }
}
export async function getArticleByIdServe(id: number) {
    try {
        return (await getArticleByIdApi<IResData<ResArticlesBody>>({ id })).data.body;
    } catch (error) {
        logError(error);
    }
}
export async function addArticleServe(body: ReqAddArticleBody) {
    try {
        return (await addArticleApi<IResData>(body)).data.body;
    } catch (error) {
        logError(error);
    }
}
export async function getArticlesByTagidServe(id: number) {
    try {
        return (await getArticlesByTagidApi<IResData<ResArticlesBody>>({ id })).data.body;
    } catch (error) {
        logError(error);
    }
}
