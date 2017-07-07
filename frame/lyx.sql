DROP VIEW IF EXISTS state_view;
CREATE VIEW state_view AS
SELECT s.* , v.name as she_name ,v.pic as she_pic
FROM state AS s , t_design AS v
WHERE s.pid = v.id;