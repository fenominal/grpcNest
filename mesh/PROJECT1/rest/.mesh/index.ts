// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, type ExecuteMeshFn, type SubscribeMeshFn, type MeshContext as BaseMeshContext, type MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import type { ImportFn } from '@graphql-mesh/types';
import type { Project1Types } from './sources/PROJECT1/types';
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
  PROJECT1__getFirstqueryRequest_Input: { input: any; output: any; }
  PROJECT1__Empty_Input: { input: any; output: any; }
  TransportOptions: { input: any; output: any; }
};

export type Query = {
  PROJECT1_PROJECT1Service_getFirstCommand?: Maybe<PROJECT1__getFirstCommandResponse>;
  PROJECT1_PROJECT1Service_getFirstquery?: Maybe<PROJECT1__getFirstqueryResponse>;
  PROJECT1_PROJECT1Service_connectivityState?: Maybe<ConnectivityState>;
};


export type QueryPROJECT1_PROJECT1Service_getFirstCommandArgs = {
  input?: InputMaybe<PROJECT1__getFirstCommandRequest_Input>;
};


export type QueryPROJECT1_PROJECT1Service_getFirstqueryArgs = {
  input?: InputMaybe<Scalars['PROJECT1__getFirstqueryRequest_Input']['input']>;
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

export type PROJECT1__getFirstCommandRequest_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type PROJECT1__getFirstqueryResponse = {
  data?: Maybe<PROJECT1__Hero>;
  message?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Scalars['Int']['output']>;
};

export type PROJECT1__Hero = {
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
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

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  PROJECT1__getFirstCommandResponse: ResolverTypeWrapper<PROJECT1__getFirstCommandResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  PROJECT1__getFirstCommandRequest_Input: PROJECT1__getFirstCommandRequest_Input;
  PROJECT1__getFirstqueryResponse: ResolverTypeWrapper<PROJECT1__getFirstqueryResponse>;
  PROJECT1__Hero: ResolverTypeWrapper<PROJECT1__Hero>;
  PROJECT1__getFirstqueryRequest_Input: ResolverTypeWrapper<Scalars['PROJECT1__getFirstqueryRequest_Input']['output']>;
  ConnectivityState: null;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  PROJECT1__HeroById_Input: PROJECT1__HeroById_Input;
  PROJECT1__HeroArray: ResolverTypeWrapper<PROJECT1__HeroArray>;
  PROJECT1__Empty_Input: ResolverTypeWrapper<Scalars['PROJECT1__Empty_Input']['output']>;
  PROJECT1__nestedType: ResolverTypeWrapper<PROJECT1__nestedType>;
  PROJECT1__EnumType: ResolverTypeWrapper<PROJECT1__EnumType>;
  PROJECT1__EnumType__PAYMENT_SYSTEM: null;
  TransportOptions: ResolverTypeWrapper<Scalars['TransportOptions']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  PROJECT1__getFirstCommandResponse: PROJECT1__getFirstCommandResponse;
  String: Scalars['String']['output'];
  Int: Scalars['Int']['output'];
  PROJECT1__getFirstCommandRequest_Input: PROJECT1__getFirstCommandRequest_Input;
  PROJECT1__getFirstqueryResponse: PROJECT1__getFirstqueryResponse;
  PROJECT1__Hero: PROJECT1__Hero;
  PROJECT1__getFirstqueryRequest_Input: Scalars['PROJECT1__getFirstqueryRequest_Input']['output'];
  Boolean: Scalars['Boolean']['output'];
  Mutation: {};
  PROJECT1__HeroById_Input: PROJECT1__HeroById_Input;
  PROJECT1__HeroArray: PROJECT1__HeroArray;
  PROJECT1__Empty_Input: Scalars['PROJECT1__Empty_Input']['output'];
  PROJECT1__nestedType: PROJECT1__nestedType;
  PROJECT1__EnumType: PROJECT1__EnumType;
  TransportOptions: Scalars['TransportOptions']['output'];
}>;

export type enumDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  value?: Maybe<Scalars['String']['input']>;
};

export type enumDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = enumDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type grpcMethodDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  rootJsonName?: Maybe<Scalars['String']['input']>;
  objPath?: Maybe<Scalars['String']['input']>;
  methodName?: Maybe<Scalars['String']['input']>;
  responseStream?: Maybe<Scalars['Boolean']['input']>;
};

export type grpcMethodDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcMethodDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type grpcConnectivityStateDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  rootJsonName?: Maybe<Scalars['String']['input']>;
  objPath?: Maybe<Scalars['String']['input']>;
};

export type grpcConnectivityStateDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = grpcConnectivityStateDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type streamDirectiveArgs = {
  if?: Scalars['Boolean']['input'];
  label?: Maybe<Scalars['String']['input']>;
  initialCount?: Maybe<Scalars['Int']['input']>;
};

export type streamDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = streamDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type transportDirectiveArgs = {
  subgraph?: Maybe<Scalars['String']['input']>;
  kind?: Maybe<Scalars['String']['input']>;
  location?: Maybe<Scalars['String']['input']>;
  options?: Maybe<Scalars['TransportOptions']['input']>;
};

export type transportDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = transportDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  PROJECT1_PROJECT1Service_getFirstCommand?: Resolver<Maybe<ResolversTypes['PROJECT1__getFirstCommandResponse']>, ParentType, ContextType, Partial<QueryPROJECT1_PROJECT1Service_getFirstCommandArgs>>;
  PROJECT1_PROJECT1Service_getFirstquery?: Resolver<Maybe<ResolversTypes['PROJECT1__getFirstqueryResponse']>, ParentType, ContextType, Partial<QueryPROJECT1_PROJECT1Service_getFirstqueryArgs>>;
  PROJECT1_PROJECT1Service_connectivityState?: Resolver<Maybe<ResolversTypes['ConnectivityState']>, ParentType, ContextType, Partial<QueryPROJECT1_PROJECT1Service_connectivityStateArgs>>;
}>;

export type PROJECT1__getFirstCommandResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PROJECT1__getFirstCommandResponse'] = ResolversParentTypes['PROJECT1__getFirstCommandResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PROJECT1__getFirstqueryResponseResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PROJECT1__getFirstqueryResponse'] = ResolversParentTypes['PROJECT1__getFirstqueryResponse']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['PROJECT1__Hero']>, ParentType, ContextType>;
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PROJECT1__HeroResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PROJECT1__Hero'] = ResolversParentTypes['PROJECT1__Hero']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface PROJECT1__getFirstqueryRequest_InputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PROJECT1__getFirstqueryRequest_Input'], any> {
  name: 'PROJECT1__getFirstqueryRequest_Input';
}

export type ConnectivityStateResolvers = { IDLE: 0, CONNECTING: 1, READY: 2, TRANSIENT_FAILURE: 3, SHUTDOWN: 4 };

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  PROJECT1_PROJECT1Service_FindOne?: Resolver<Maybe<ResolversTypes['PROJECT1__Hero']>, ParentType, ContextType, Partial<MutationPROJECT1_PROJECT1Service_FindOneArgs>>;
  PROJECT1_PROJECT1Service_array?: Resolver<Maybe<ResolversTypes['PROJECT1__HeroArray']>, ParentType, ContextType, Partial<MutationPROJECT1_PROJECT1Service_arrayArgs>>;
  PROJECT1_PROJECT1Service_findMany?: Resolver<Maybe<ResolversTypes['PROJECT1__HeroArray']>, ParentType, ContextType, Partial<MutationPROJECT1_PROJECT1Service_findManyArgs>>;
  PROJECT1_PROJECT1Service_nested?: Resolver<Maybe<ResolversTypes['PROJECT1__nestedType']>, ParentType, ContextType, Partial<MutationPROJECT1_PROJECT1Service_nestedArgs>>;
  PROJECT1_PROJECT1Service_enum?: Resolver<Maybe<ResolversTypes['PROJECT1__EnumType']>, ParentType, ContextType, Partial<MutationPROJECT1_PROJECT1Service_enumArgs>>;
}>;

export type PROJECT1__HeroArrayResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PROJECT1__HeroArray'] = ResolversParentTypes['PROJECT1__HeroArray']> = ResolversObject<{
  hero?: Resolver<Maybe<Array<Maybe<ResolversTypes['PROJECT1__Hero']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface PROJECT1__Empty_InputScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['PROJECT1__Empty_Input'], any> {
  name: 'PROJECT1__Empty_Input';
}

export type PROJECT1__nestedTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PROJECT1__nestedType'] = ResolversParentTypes['PROJECT1__nestedType']> = ResolversObject<{
  data?: Resolver<Maybe<ResolversTypes['PROJECT1__Hero']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PROJECT1__EnumTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PROJECT1__EnumType'] = ResolversParentTypes['PROJECT1__EnumType']> = ResolversObject<{
  payment?: Resolver<Maybe<ResolversTypes['PROJECT1__EnumType__PAYMENT_SYSTEM']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PROJECT1__EnumType__PAYMENT_SYSTEMResolvers = { CASH: 0, CREDIT_CARD: 1, DEBIT_CARD: 2, APP: 3 };

export interface TransportOptionsScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['TransportOptions'], any> {
  name: 'TransportOptions';
}

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  PROJECT1__getFirstCommandResponse?: PROJECT1__getFirstCommandResponseResolvers<ContextType>;
  PROJECT1__getFirstqueryResponse?: PROJECT1__getFirstqueryResponseResolvers<ContextType>;
  PROJECT1__Hero?: PROJECT1__HeroResolvers<ContextType>;
  PROJECT1__getFirstqueryRequest_Input?: GraphQLScalarType;
  ConnectivityState?: ConnectivityStateResolvers;
  Mutation?: MutationResolvers<ContextType>;
  PROJECT1__HeroArray?: PROJECT1__HeroArrayResolvers<ContextType>;
  PROJECT1__Empty_Input?: GraphQLScalarType;
  PROJECT1__nestedType?: PROJECT1__nestedTypeResolvers<ContextType>;
  PROJECT1__EnumType?: PROJECT1__EnumTypeResolvers<ContextType>;
  PROJECT1__EnumType__PAYMENT_SYSTEM?: PROJECT1__EnumType__PAYMENT_SYSTEMResolvers;
  TransportOptions?: GraphQLScalarType;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  enum?: enumDirectiveResolver<any, any, ContextType>;
  grpcMethod?: grpcMethodDirectiveResolver<any, any, ContextType>;
  grpcConnectivityState?: grpcConnectivityStateDirectiveResolver<any, any, ContextType>;
  stream?: streamDirectiveResolver<any, any, ContextType>;
  transport?: transportDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = Project1Types.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "",
  });
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"port":40001,"playground":false},
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export const pollingInterval = null;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    if (pollingInterval) {
      setInterval(() => {
        getMeshOptions()
        .then(meshOptions => getMesh(meshOptions))
        .then(newMesh =>
          meshInstance$.then(oldMesh => {
            oldMesh.destroy()
            meshInstance$ = Promise.resolve(newMesh)
          })
        ).catch(err => {
          console.error("Mesh polling failed so the existing version will be used:", err);
        });
      }, pollingInterval)
    }
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));