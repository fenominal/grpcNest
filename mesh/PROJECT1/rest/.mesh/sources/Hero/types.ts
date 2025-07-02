// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace HeroTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  PROJECT1__getFirstCommandRequest_Input: { input: any; output: any; }
  PROJECT1__Empty_Input: { input: any; output: any; }
  TransportOptions: { input: any; output: any; }
};

export type Query = {
  PROJECT1_PROJECT1Service_getFirstCommand?: Maybe<PROJECT1__getFirstCommandResponse>;
  PROJECT1_PROJECT1Service_connectivityState?: Maybe<ConnectivityState>;
};


export type QueryPROJECT1_PROJECT1Service_getFirstCommandArgs = {
  input?: InputMaybe<Scalars['PROJECT1__getFirstCommandRequest_Input']['input']>;
};


export type QueryPROJECT1_PROJECT1Service_connectivityStateArgs = {
  tryToConnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PROJECT1__getFirstCommandResponse = {
  data?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type ConnectivityState =
  | 'IDLE'
  | 'CONNECTING'
  | 'READY'
  | 'TRANSIENT_FAILURE'
  | 'SHUTDOWN';

export type Mutation = {
  PROJECT1_PROJECT1Service_FindOne?: Maybe<PROJECT1__Hero>;
  PROJECT1_PROJECT1Service_array?: Maybe<PROJECT1__HeroArray>;
  PROJECT1_PROJECT1Service_findMany?: Maybe<PROJECT1__HeroArray>;
  PROJECT1_PROJECT1Service_nested?: Maybe<PROJECT1__nestedType>;
  PROJECT1_PROJECT1Service_enum?: Maybe<PROJECT1__EnumType>;
};


export type MutationPROJECT1_PROJECT1Service_FindOneArgs = {
  input?: InputMaybe<PROJECT1__HeroById_Input>;
};


export type MutationPROJECT1_PROJECT1Service_arrayArgs = {
  input?: InputMaybe<Scalars['PROJECT1__Empty_Input']['input']>;
};


export type MutationPROJECT1_PROJECT1Service_findManyArgs = {
  input?: InputMaybe<PROJECT1__HeroById_Input>;
};


export type MutationPROJECT1_PROJECT1Service_nestedArgs = {
  input?: InputMaybe<Scalars['PROJECT1__Empty_Input']['input']>;
};


export type MutationPROJECT1_PROJECT1Service_enumArgs = {
  input?: InputMaybe<Scalars['PROJECT1__Empty_Input']['input']>;
};

export type PROJECT1__Hero = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
};

export type PROJECT1__HeroById_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type PROJECT1__HeroArray = {
  hero?: Maybe<Array<Maybe<PROJECT1__Hero>>>;
};

export type PROJECT1__nestedType = {
  data?: Maybe<PROJECT1__Hero>;
};

export type PROJECT1__EnumType = {
  payment?: Maybe<PROJECT1__EnumType__PAYMENT_SYSTEM>;
};

export type PROJECT1__EnumType__PAYMENT_SYSTEM =
  | 'CASH'
  | 'CREDIT_CARD'
  | 'DEBIT_CARD'
  | 'APP';

  export type QuerySdk = {
      /** undefined **/
  PROJECT1_PROJECT1Service_getFirstCommand: InContextSdkMethod<Query['PROJECT1_PROJECT1Service_getFirstCommand'], QueryPROJECT1_PROJECT1Service_getFirstCommandArgs, MeshContext>,
  /** undefined **/
  PROJECT1_PROJECT1Service_connectivityState: InContextSdkMethod<Query['PROJECT1_PROJECT1Service_connectivityState'], QueryPROJECT1_PROJECT1Service_connectivityStateArgs, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  PROJECT1_PROJECT1Service_FindOne: InContextSdkMethod<Mutation['PROJECT1_PROJECT1Service_FindOne'], MutationPROJECT1_PROJECT1Service_FindOneArgs, MeshContext>,
  /** undefined **/
  PROJECT1_PROJECT1Service_array: InContextSdkMethod<Mutation['PROJECT1_PROJECT1Service_array'], MutationPROJECT1_PROJECT1Service_arrayArgs, MeshContext>,
  /** undefined **/
  PROJECT1_PROJECT1Service_findMany: InContextSdkMethod<Mutation['PROJECT1_PROJECT1Service_findMany'], MutationPROJECT1_PROJECT1Service_findManyArgs, MeshContext>,
  /** undefined **/
  PROJECT1_PROJECT1Service_nested: InContextSdkMethod<Mutation['PROJECT1_PROJECT1Service_nested'], MutationPROJECT1_PROJECT1Service_nestedArgs, MeshContext>,
  /** undefined **/
  PROJECT1_PROJECT1Service_enum: InContextSdkMethod<Mutation['PROJECT1_PROJECT1Service_enum'], MutationPROJECT1_PROJECT1Service_enumArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Hero"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
