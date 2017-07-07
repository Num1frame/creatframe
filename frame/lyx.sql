DROP VIEW IF EXISTS state_view;
CREATE VIEW state_view AS
SELECT s.* , v.name as she_name
FROM state AS s , zjt_design AS v
WHERE s.pid = v.id;