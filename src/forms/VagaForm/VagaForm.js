import React, { useMemo } from 'react';
import { TextField } from 'final-form-material-ui';
import createDecorator from 'final-form-focus';
import { Form, Field } from 'react-final-form';
import { Button, Grid } from '@material-ui/core';

import { validate } from 'utils/validate';
import schema from './schema';
import SelectField from 'components/SelectField';

const focusOnErrors = createDecorator();

const provinces = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
};

function VagaForm({ onSubmit }) {
  const options = useMemo(() => {
    return Object.keys(provinces).map(key => ({
      label: provinces[key],
      value: key,
    }));
  }, []);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate(schema)}
      decorators={[focusOnErrors]}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Field
                name="company.name"
                component={TextField}
                label="Nome da Empresa"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="company.province"
                component={SelectField}
                label="Estado"
                options={options}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="webPage"
                component={TextField}
                label="Página de vagas"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="jobRecruiter.email"
                component={TextField}
                label="E-mail do Recrutador"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="jobRecruiter.linkedIn"
                component={TextField}
                label="URL do Linkedin"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                disabled={submitting}
              >
                Enviar
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    />
  );
}

export default VagaForm;
