import { Wordpress } from '../types/Wordpress'
import { GetterTree } from 'vuex';

export const getters: GetterTree<Wordpress, any> = {
    posts (state) {
        return state.posts
    }
}