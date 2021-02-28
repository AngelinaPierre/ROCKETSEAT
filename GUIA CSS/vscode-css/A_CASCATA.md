# A CASCATA (cascading)

A escolha do browser de qual regra aplicar, caso haja muitas regras para o mesmo elemento.

* Seu estilo é lido de cima para baixo.

É levado em consideração 3 fatores :
    1. ORIGEM DO ESTILO
    2. ESPECIFICIDADE
    3. IMPORTÂNCIA

### ORIGEM DO ESTILO

inline > tag style > tag link

### ESPECIFICIDADE

É um cálculo matemático, onde, cada tipo de seletor e origem do estilo, possuem valores a serem considerados.

0. Universal selector, combinators e negation pseudo-class (:not());
1. Element type selector e pseudo-elements (::before, ::after);
10. Classes e attribute selectors ([type"radio"]).
100. Id selector
1000. Inline


### A REGRA !IMPORTANT

* Cuidado, evite o uso.
* Não é considerado uma boa prática
* Quabra o fluxo natural da cascata.

