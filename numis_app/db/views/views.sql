CREATE OR REPLACE VIEW vw_collection_info
AS

SELECT 
    c.id,
    c.year, 
    c.condition,
    c.paid_amount,
    cu.name AS currency_name,
    c.sourced_from,
    c.sourced_when,
    c.is_cleaned,
    cn.obverse,
    cn.reverse,
    cs.name as coinset_name, 
    mt.name as mint_name,
    gr.name as grade_name
FROM collection c
     LEFT JOIN coin     AS cn ON c.coin_id          = cn.id
     LEFT JOIN coinset  AS cs ON c.coinset_id       = cs.id
     LEFT JOIN mint     AS mt ON c.mint_id          = mt.id
     LEFT JOIN mintmark AS mm ON c.mint_id          = mm.id
     LEFT JOIN grade    AS gr ON c.grade_id         = gr.id
     LEFT JOIN currency AS cu ON c.paid_currency_id = cu.id
;
