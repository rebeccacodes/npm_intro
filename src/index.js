import s_query, { add_to_dom, make_element } from './helpers';
import add from './add';

add_to_dom('hello there! webpack is fun!');

add_to_dom(`5 + 8 = ${add(5, 8)}`);

make_element('p', 'this is a paragraph tag');

s_query.make_element('h2', 'this is s_query');

