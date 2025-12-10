CREATE TABLE comments (
    id INT,
    sentence VARCHAR(255)
);

INSERT INTO comments (id, sentence) VALUES
(1, 'This is a bad example'),
(2, 'No bad behavior allowed');

--Select The good with bad.

SELECT
    sentence,
    REPLACE(sentence, 'bad', 'good') AS updated_sentence
FROM comments;