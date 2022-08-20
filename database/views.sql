CREATE VIEW vw_country_currencies AS
    SELECT
        co.short_name AS country_name
        ,STRING_AGG(cu.name,', ') AS currency_names
    FROM currency_country AS cc
        LEFT JOIN currency AS cu ON cc.currency_id = cu.id
        LEFT JOIN country AS co oN cc.country_id = co.id
    GROUP BY country_name
    ORDER BY co.short_name
;

CREATE VIEW vw_currency_countries AS
    SELECT
        cu.name AS currency_name
        ,STRING_AGG(co.short_name,', ') AS country_names
    FROM currency_country AS cc
        LEFT JOIN currency AS cu ON cc.currency_id = cu.id
        LEFT JOIN country AS co oN cc.country_id = co.id
    GROUP BY currency_name
    ORDER BY cu.name
;

